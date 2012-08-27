var boxes = document.getElementById("boxes").getElementsByTagName("li"), i;

for (i=0; i < boxes.length; i++){
  var box = boxes[i];
  var url = box.getElementsByTagName('span')[1];

  hide(url);
  event(box, "click", showUrl(box));
  event(url, "blur", hideUrl(box));
}

function event(el, ev, fn) {
  if (el.addEventListener) {
    el.addEventListener(ev, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent (ev, fn);
  } else {
    el['on' + ev] = fn;
  }
}

function hide(el) {
  el.style.display = "none";
}

function hideUrl(el) {
  var spans = el.getElementsByTagName('span');
  var name = spans[0];
  var url = spans[1];
  var size = spans[2];
  return function () {
    if (el.isOpen === true) {
      el.isOpen = false;
      show(name);
      hide(url);
      show(size);
    }
  };
}

function selectText(el) {
  var sel, range;
  if (window.getSelection && document.createRange) {
    range = document.createRange();
    range.selectNodeContents(el);
    sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(el);
    range.select();
  }
}

function show(el) {
  el.style.display = "";
}

function showUrl(el) {
  var spans = el.getElementsByTagName('span');
  var name = spans[0];
  var url = spans[1];
  var size = spans[2];
  return function () {
    if (el.isOpen !== true) {
      el.isOpen = true;
      hide(name);
      show(url);
      url.contentEditable = true;
      selectText(url);
      hide(size);
    }
  };
}

