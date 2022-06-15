function scrollFunction() {
    let e = document.getElementById("reserve-table");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }