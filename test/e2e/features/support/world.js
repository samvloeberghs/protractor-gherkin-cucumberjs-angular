function World() {
  this.helper = function(){
    console.log('help me..');
  };
}

module.exports = function() {
  this.World = World;
};
