console.log('scripts loaded');
//
// var token = $('#api-token').val();
// $.ajaxSetup({
//   headers:{
//     "accept": "application/json",
//     "token": token
// }
// });
// //model
// var Rating = Backbone.Model.extend({});
// //collection
// var RatingCollection = Backbone.Collection.extend({
// model: Rating,
// url: 'api/ratings'
// });
// //views
// <<<<<<< HEAD
// var RatingView = Backbone.View.extend({
//   tagName: 'div',
//   className: 'rating',
//   template: _.template( $('#rating-template').html() ),
//   render: function(){
//     this.$el.empty();
//     var html = this.template( this.model.toJSON() );
//     var $html = $( html );
//     this.$el.append( $html );
//   },
//   events:{
//     'click button.remove': 'removeRating'
//   },
//   removeRating: function(){
//     this.model.destroy();
//     this.$el.remove();
//   }
//
// });
//
// var RatingListView = Backbone.View.extend({
//   initialize: function(){
//     this.listenTo(this.collection, 'add', this.render);
//   },
//   render: function(){
//     this.$el.empty();
//     var ratings = this.collection.models;
//     var view;
//     for (var i = 0; i < ratings.length; i++) {
//       view = new RatingView({model: ratings[i]});
//       view.render();
//       this.$el.append( view.$el );
//     }
//   }
// });
//
//
// var ratings = new RatingCollection();
// var RatingPainter = new RatingListView({
//   collection: ratings,
//   el: $('#ratings-list')
// });
// ratings.fetch();
//
//
// $('form.create-rating').on('submit', function(e){
//   e.preventDefault();
//   var newRating = $(this).find("#rating-post").val();
//   ratings.create({mood: newRating});
// });
// =======
// // var RatingView = Backbone.View.extend({
// //   tagName: 'div',
// //   className: 'rating',
// //   template: _.template( $('#rating-template').html() ),
// //   render: function(){
// //     this.$el.empty();
// //     var html = this.template( this.model.toJSON() );
// //     var $html = $( html );
// //     this.$el.append( $html );
// //   },
// //   events:{
// //     'click button.remove': 'removeRating'
// //   },
// //   removeRating: function(){
// //     this.model.destroy();
// //     this.$el.remove();
// //   }
// //
// // });
//
// // var RatingListView = Backbone.View.extend({
// //   initialize: function(){
// //     this.listenTo(this.collection, 'add', this.render);
// //   },
// //   render: function(){
// //     this.$el.empty();
// //     var ratings = this.collection.models;
// //     var view;
// //     for (var i = 0; i < ratings.length; i++) {
// //       view = new RatingView({model: ratings[i]});
// //       view.render();
// //       this.$el.append( view.$el );
// //     }
// //   }
// // });
// //
// //
// //
// //
// // var ratings = new RatingCollection();
// // var RatingPainter = new RatingListView({
// //   collection: ratings,
// //   el: $('#ratings-list')
// // });
// // ratings.fetch();
// //
// //
// // $('form.create-rating').on('submit', function(e){
// //   e.preventDefault();
// //   var newRating = $(this).find("#me-message").val();
// //   chirps.create({message: newMessage});
// // });
// >>>>>>> 01aa402b89719d9352b887bf00ea8b4394d88441
