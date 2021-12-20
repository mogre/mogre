module.exports = {
    /**
     * Returns a random hash
     *
     * @returns {String} The hash
     */
    random() {
      const segment = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return `${segment()}-${segment()}-${segment()}`;
    },
    /**
     * Returns the node environment variables
     *
     * @returns {String} The environment variable
     */
    environment() {
      return process.env.ELEVENTY_ENV || "development";
    },
};