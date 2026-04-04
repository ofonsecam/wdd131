const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

/**
 * Form page: populate product select, date max, footer year.
 * Review page: increment counter only on new GET submissions; show total.
 */
(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var productSelect = document.getElementById("productName");
  if (productSelect) {
    products.forEach(function (product) {
      var option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  var installDate = document.getElementById("installDate");
  if (installDate) {
    installDate.max = new Date().toISOString().slice(0, 10);
  }

  var reviewSummary = document.querySelector(".review-summary");
  var urlLooksLikeReview =
    window.location.pathname.includes("review.html") ||
    window.location.href.includes("review.html");
  var isReviewPage = reviewSummary !== null || urlLooksLikeReview;

  if (isReviewPage && reviewSummary) {
    var stored = localStorage.getItem("reviewCounter");
    var count = parseInt(stored, 10);
    if (Number.isNaN(count)) {
      count = 0;
    }

    var search = window.location.search;
    if (search.length > 0) {
      count += 1;
      localStorage.setItem("reviewCounter", String(count));
      var cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState(null, "", cleanUrl);
    }

    var counterPara = document.getElementById("reviewTotalCounter");
    if (!counterPara) {
      counterPara = document.createElement("p");
      counterPara.id = "reviewTotalCounter";
      reviewSummary.appendChild(counterPara);
    }
    counterPara.textContent = "Total reviews completed: " + count;
  }
})();
