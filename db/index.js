import { Pool } from 'pg';
import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();

const dbString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: dbString,
});

export default {
  /**
   * DB Query
   * @param {string} query
   * @param {Array} placeholder values
   * @returns {object} object
   */
  query(sqlQuery, values) {
    return new Promise((resolve, reject) => {
      pool.query(sqlQuery, values)
        .then((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  },
  /**
   * Get sequelize connection Object
   * @returns {object} sequelize Object
   */
  getSequelizeConnection() {
    const sequelizeObject = new Sequelize(dbString, {
      logging: false,
      define: {
        timestamps: false,
      },
    });
    return sequelizeObject;
  },
};
