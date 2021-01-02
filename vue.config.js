module.exports = {  
    outputDir: "../instagram_front_prod/src/main/resources/static",  
    indexPath: "static/index.html",  
    devServer: {  
      proxy: "http://localhost:8080"  
    },  

  };