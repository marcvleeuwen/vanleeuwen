$(function () {
    $('#contactForm').on('click', function (event) {
        event.preventDefault();
      var email = 'marc2799015@gmail.com';
      var subject = 'Test test test';
      var emailBody = 'Some blah';
      window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
    });
});