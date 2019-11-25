<form class="contactorange" id="orangeuser" method="get" action="">
  <fieldset>
    <legend>Please provide your name, email address (won't be published) and a comment</legend>
    <p>
      <label for="cname">Name (required, at least 2 characters)</label>
      <input id="cname" name="name" minlength="2" type="text" required>
    </p>
    <p>
      <label for="cemail">E-Mail (required)</label>
      <input id="cemail" type="email" name="email" required>
    </p>
    <p>
      <label for="curl">URL (optional)</label>
      <input id="curl" type="url" name="url">
    </p>
    <p>
      <label for="ccomment">Your comment (required)</label>
      <textarea id="ccomment" name="comment" required></textarea>
    </p>
    <p>
      <input class="submit" type="submit" value="Submit">
    </p>
  </fieldset>
</form>
<script>
$("#commentForm").validate();
</script>




// $(function () {
//     const $orangeuser = $("#contact-orange");
// });
// if ($contactOrange.length) {
//     $orangeuser.validate({
//         rules: {
//             username: {
//                 required: true
//             }
//         },
//         messages: {
//             username: {
//                 required: 'Please enter a valid name.'
//             }
//         },
//         messages: {
//             username: {
//                 required: 'Name is a required field'
//             }
//         }
//     })
// }

// })

// var constraints = {
//     username: {
//         presence: true,
//         exclusion: {
//             within: ["nicklas"],
//             message: "'%{value}' is not allowed"
//         }
//     },
//     password: {
//         presence: true,
//         length: {
//             minimum: 6,
//             message: "must be at least 6 characters"
//         }
//     }
// };

// validate({
//     password: "bad"
// }, constraints);
// // => {
// //   "username": ["Username can't be blank"],
// //   "password": ["Password must be at least 6 characters"]
// // }

// validate({
//     username: "nick",
//     password: "better"
// }, constraints);
// // => undefined

// validate({
//     username: "nicklas",
//     password: "better"
// }, constraints);
// // => {"username": ["Username 'nicklas' is not allowed"]}

// validate({
//     password: "better"
// }, constraints, {
//     fullMessages: false
// });
// // => {"username": ["can't be blank"]}

// validate({}, constraints, {
//     format: "flat"
// });
// // => ["Username can't be blank", "Password can't be blank"]

// validate({
//     username: "nicklas",
//     password: "bad"
// }, constraints, {
//     format: "detailed"
// });
// => [
//   {
//     "attribute": "username",
//     "value": "nicklas",
//     "validator": "exclusion",
//     "globalOptions": {
//       "format": "detailed"
//     },
//     "attributes": {
//       "username": "nicklas",
//       "password": "bad"
//     },
//     "options": {
//       "within": [
//         "nicklas"
//       ],
//       "message": "'%{value}' is not allowed"
//     },
//     "error": "Username 'nicklas' is not allowed"
//   },
//   {
//     "attribute": "password",
//     "value": "bad",
//     "validator": "length",
//     "globalOptions": {
//       "format": "detailed"
//     },
//     "attributes": {
//       "username": "nicklas",
//       "password": "bad"
//     },
//     "options": {
//       "minimum": 6,
//       "message": "must be at least 6 characters"
//     },
//     "error": "Password must be at least 6 characters"
//   }
// ]

validate({}, {
    username: {
        presence: {
            message: "^You must pick a username"
        }
    }
});
// => {"username": ["You must pick a username"]}