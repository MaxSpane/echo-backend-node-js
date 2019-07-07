/* eslint-disable no-console */
import db from './index';
import { createQueries, dropQueries } from './queries';

/**
 * Function to create necessary tables
 */
const createTables = async () => {
  try {
    // await db.query(createQueries.usersTable);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Function for dropping Tables
 */

const dropTables = async () => {
  try {
    // await db.query(dropQueries.usersTable);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Function for performing Migrations on Tables
 */

const migrateTables = async () => {
  try {
    // await db.query(dropQueries.usersTable);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTables,
  dropTables,
  migrateTables,
};

// eslint-disable-next-line import/no-extraneous-dependencies
require('make-runnable');
