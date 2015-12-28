export default function initUser() {
  // fixture
  if (Meteor.users.find().count() === 0) {
    const userObject = {
      username: 'dd',
      mail: 'dd@dd',
      password: '123123',
      profile: {
        name: 'ddd',
      },
    }
    Accounts.createUser(userObject)
  }

  // Accounts.config({
  //   sendVerificationEmail: true,
  // })

  // Validate username, sending a specific error message on failure.
  Accounts.validateNewUser(user => {
    if (user.username && user.username.length >= 3) {
      return true
    }
    if (user.services.facebook || user.services.google) {
      return true
    }
    throw new Meteor.Error(403, 'Username must have at least 3 characters')
  })

  Accounts.onCreateUser((options, user) => {
    if (options.profile) {
      user.profile = options.profile
    } else {
      user.profile = {
        name: user.username,
      }
    }

    // facebook login:
    if (user.services) {
      if (user.services.facebook) {
        user.emails = [
          { address: user.services.facebook.email, verified: true },
        ]
      } else if (user.services.google) {
        user.emails = [
          { address: user.services.google.email, verified: true },
        ]
      }
    }

    return user
  })
}
