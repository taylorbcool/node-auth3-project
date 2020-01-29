
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'username1', password: 'password1', type: 'admin'},
        {id: 2, username: 'username2', password: 'password2', type: 'admin'},
        {id: 3, username: 'username3', password: 'password3', type: 'user'}
      ]);
    });
};