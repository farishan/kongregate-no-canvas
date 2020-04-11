(function(root){
  let save_key = 'default_key_data';

  root.Saloimex = {
    /**
     * Initialize
     *
     * @param {Object} options
     *   title: {GameTitle}
     */
    init: function(options) {
      if(options.title){
        save_key = options.title.toLowerCase().split(' ').join('_') + '_data';
      }
    },

    /**
     * Save the game data
     *
     * @param {Object} gamedata
     *   The game data object
     */
    save: function(gamedata) {
      localStorage.setItem(save_key, JSON.stringify(gamedata));
    },

    /**
     * Load the game data
     *
     * @return {Object} data
     *   The game data object
     */
    load: function() {
      const gamedata = JSON.parse(localStorage.getItem(save_key));
      if(gamedata){
        return gamedata;
      }else{
        return false;
      }
    },

    /**
     * Export the game data to base64 string
     *
     * @return {String} gamedata
     *   The game data object
     */
    exportData: function(gamedata) {
      this.save(gamedata);
      return btoa(JSON.stringify(this.load()));
    },

    /**
     * Import the game data from base64 string
     *
     * @return {Object} data
     *   The game data object
     */
    importData: function(gamestring) {
      if(gamestring.length !== 0){
        const gamedata = JSON.parse(atob(gamestring));
        this.save(gamedata);
        return gamedata;
      }
    }
  }

  // AMD support
  if (typeof define === 'function' && define.amd) {
    define(root.MainLoop);
  }
  // CommonJS support
  else if (typeof module === 'object' && module !== null && typeof module.exports === 'object') {
    module.exports = root.MainLoop;
  }
})(this);
