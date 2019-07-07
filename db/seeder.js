/* eslint-disable no-console */
import db from './index';
import { seedQueries } from './queries';

/**
 * Functions to seed necessary tables
 */
const seedTables = async () => {
  try {
    await db.query(seedQueries.usersTable);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  seedTables,
};

// eslint-disable-next-line import/no-extraneous-dependencies
require('make-runnable');
