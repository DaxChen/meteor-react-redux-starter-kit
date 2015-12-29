import './method_example'
import initUser from './server/init-user'

Meteor.startup(() => {
  initUser()

  if (Meteor.settings.google) {
    ServiceConfiguration.configurations.upsert({
      service: 'google',
    }, {
      $set: Meteor.settings.google,
    })
  }
  if (Meteor.settings.facebook) {
    ServiceConfiguration.configurations.upsert({
      service: 'facebook',
    }, {
      $set: Meteor.settings.facebook,
    })
  }
})
