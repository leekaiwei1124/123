function redirectToGAnalytics() {
	const GAWebsite =
		"https://analytics.google.com/analytics/web/#/report-home/a177413035w245591238p228323887";
	window.open(GAWebsite, "_blank");
}

function signOut() {
	let auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
		console.log("User signed out.");
		window.location.href = "admin_login.html";
	});
}

// Step 2: Load the Embed API library.
gapi.analytics.ready(function () {
	// Authorize the user.
	const CLIENT_ID =
		"271164370078-ubc0aacqjojli2i0ub04c7qtf5q01rn9.apps.googleusercontent.com";
	gapi.analytics.auth.authorize({
		container: "auth-button",
		clientid: CLIENT_ID,
	});

	/**
	 * Create a new ActiveUsers instance to be rendered inside of an
	 * element with the id "active-users-container" and poll for changes every
	 * five seconds.
	 */
	let activeUsers = new gapi.analytics.ext.ActiveUsers({
		container: "active-users-container",
		pollingInterval: 5,
	});

	/**
	 * Create a new ViewSelector2 instance to be rendered inside of an
	 * element with the id "view-selector-container".
	 */
	let viewSelector = new gapi.analytics.ext.ViewSelector2({
		container: "view-selector-container",
	}).execute();

	// Create the chart.

	/**
	 * Draw the a chart.js bar chart with data from the specified view that
	 * overlays session data for the current year over session data for the
	 * previous year, grouped by month.
	 */
	function renderSessionChart(ids) {
		// Assign today date to now
		let now = moment();

		let getSessionData = query({
			ids: ids,
			dimensions: "ga:date,ga:day",
			metrics: "ga:users",
			"start-date": moment(now)
				.subtract(30, "day")
				.format("YYYY-MM-DD"),
			"end-date": moment(now).format("YYYY-MM-DD"),
		});

		Promise.resolve(getSessionData)
			.then(function (results) {
				let data1 = results.rows.map(function (row) {
					return +row[2];
				});
				let labels = results.rows.map(function (row) {
					return +row[0];
				});
				labels = labels.map(function (label) {
					return moment(label, "YYYYMMDD").format(
						"DD/MMM"
					);
				});

				let data = {
					labels: labels,
					datasets: [
						{
							label:
								"08-09-2020 Until Today",
							fillColor:
								"rgba(151,187,205,0.5)",
							strokeColor:
								"rgba(151,187,205,1)",
							data: data1,
						},
					],
				};

				new Chart(makeCanvas("chart-2-container")).Bar(
					data
				);
				generateLegend(
					"legend-2-container",
					data.datasets
				);
			})
			.catch(function (err) {
				console.error(err.stack);
			});
	}

	// Hook up the components to work together.
	gapi.analytics.auth.on("success", function (response) {
		viewSelector.execute();
	});

	/**
	 * Update the activeUsers component, the Chartjs charts, and the dashboard
	 * title whenever the user changes the view.
	 */
	viewSelector.on("viewChange", function (data) {
		// Start tracking active users for this view.
		activeUsers.set(data).execute();

		// Render all the of charts for this view.
		renderSessionChart(data.ids);
	});

	//Utility functions
	/**
	 * Extend the Embed APIs `gapi.analytics.report.Data` component to
	 * return a promise the is fulfilled with the value returned by the API.
	 * @param {Object} params The request parameters.
	 * @return {Promise} A promise.
	 */
	function query(params) {
		return new Promise(function (resolve, reject) {
			let data = new gapi.analytics.report.Data({
				query: params,
			});
			data.once("success", function (response) {
				resolve(response);
			})
				.once("error", function (response) {
					reject(response);
				})
				.execute();
		});
	}

	/**
	 * Create a new canvas inside the specified element. Set it to be the width
	 * and height of its container.
	 * @param {string} id The id attribute of the element to host the canvas.
	 * @return {RenderingContext} The 2D canvas context.
	 */
	function makeCanvas(id) {
		let container = document.getElementById(id);
		let canvas = document.createElement("canvas");
		let ctx = canvas.getContext("2d");

		container.innerHTML = "";
		canvas.width = container.offsetWidth;
		canvas.height = container.offsetHeight;
		container.appendChild(canvas);

		return ctx;
	}

	/**
	 * Create a visual legend inside the specified element based off of a
	 * Chart.js dataset.
	 * @param {string} id The id attribute of the element to host the legend.
	 * @param {Array.<Object>} items A list of labels and colors for the legend.
	 */
	function generateLegend(id, items) {
		let legend = document.getElementById(id);
		legend.innerHTML = items
			.map(function (item) {
				let color = item.color || item.fillColor;
				let label = item.label;
				return (
					'<li><i style="background:' +
					color +
					'"></i>' +
					escapeHtml(label) +
					"</li>"
				);
			})
			.join("");
	}

	// Set some global Chart.js defaults.
	Chart.defaults.global.animationSteps = 60;
	Chart.defaults.global.animationEasing = "easeInOutQuart";
	Chart.defaults.global.responsive = true;
	Chart.defaults.global.maintainAspectRatio = false;

	/**
	 * Escapes a potentially unsafe HTML string.
	 * @param {string} str An string that may contain HTML entities.
	 * @return {string} The HTML-escaped string.
	 */
	function escapeHtml(str) {
		let div = document.createElement("div");
		div.appendChild(document.createTextNode(str));
		return div.innerHTML;
	}
});
