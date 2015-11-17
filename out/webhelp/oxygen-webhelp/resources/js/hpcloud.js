
      $(document).ready(function()
      { 

      
      $('.gloss').each(function() {
      $(this).qtip({
      content: {
      attr: 'title'
      },
      position: {
      target: 'mouse',
      adjust: { x: 5, y: 5 }
      }
      });
      });
      
      } 
      ); 
