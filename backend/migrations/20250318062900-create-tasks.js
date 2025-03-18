'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
    db.createTable('tasks', {
      id: { type: 'int', primaryKey: true, autoIncrement:true},
      name: { type: 'string', notNull:true },
      details: { type: 'string'},
      estimate_time: { type: 'string'},
      status: { type: 'string', defaultValue:'open'},
      created_at: { type: 'timestamp',defaultValue:'CURRENT_TIMESTAMP'},
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('tasks', callback);
};

exports._meta = {
  "version": 1
};
