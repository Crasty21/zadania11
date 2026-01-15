$("#list").sortable();

function newItem(text) {
  return $("<li>").addClass("list-group-item").text(text);
}

$("#add").click(function() {
  let val = $("#product").val();
  if (val) {
    $("#list").append(newItem(val));
    $("#product").val("");
  }
});

$("#addStart").click(function() {
  let val = $("#product").val();
  if (val) {
    $("#list").prepend(newItem(val));
    $("#product").val("");
  }
});

$("#addEnd").click(function() {
  let val = $("#product").val();
  if (val) {
    $("#list").append(newItem(val));
    $("#product").val("");
  }
});

$("#removeLast").click(function() {
  $("#list li:last").remove();
});

$("#clear").click(function() {
  $("#list").empty();
});

$("#restore").click(function() {
  $("#list").html(`
    <li class="list-group-item">Chleb</li>
    <li class="list-group-item">Mleko</li>
    <li class="list-group-item">Masło</li>
  `);
});

$("#color").click(function() {
  $("#list li:even").css("background-color", "#ddd");
});

$("#list").on("click", "li", function() {
  $("#list li").removeClass("active");
  $(this).addClass("active");
});

$("#list").on("dblclick", "li", function() {
  let li = $(this);
  let text = li.text();
  let input = $("<input>").val(text);

  li.fadeOut(200, function() {
    li.html(input).fadeIn(200);
    input.focus();
  });

  input.keyup(function(e) {
    if (e.key === "Enter") {
      li.fadeOut(200, function() {
        li.text(input.val()).fadeIn(200);
      });
    }
  });
});

$("#sort").click(function() {
  let items = $("#list li").get();
  items.sort(function(a, b) {
    return $(a).text().localeCompare($(b).text());
  });
  $("#list").empty().append(items);
});

$("#filter").keyup(function() {
  let val = $(this).val().toLowerCase();
  $("#list li").each(function() {
    $(this).toggle($(this).text().toLowerCase().includes(val));
  });
});
