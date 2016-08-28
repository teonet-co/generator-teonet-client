'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the tiptop ' + chalk.red('TEONET-CLIENT') + ' generator!'
    ));

    //Get array of inputs from the user
    var prompts = [
    {
        type: 'input',
        name: 'name',
        message: 'What would you love to name this project (lowercase name of application executable file)?',
        default: 'teocli' //this.appname
    },
    {
        type: 'input',
        name: 'version',
        message: 'This project version',
        default: "0.0.1",
        store: true
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project',
        default: "Teonet client C native"
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What is the project\'s repository?',
        default: "No repository yet"
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author name',
        default: "Application Author",
        store: true
    },
    {
        type: 'input',
        name: 'email',
        message: 'Author email',
        default: "email@example.com",
        store: true
    },
    {
        type: 'input',
        name: 'license',
        message: 'How would you love to license the project?',
        default: "Apache-2.0",
        store: true
    }];

    return this.prompt(prompts).then(function (props) {
        
        function capitalize(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        };

        this.props = props; // To access props later use this.props.name;
        this.props.name_capitalize = capitalize(this.props.name);
        this.props.name_upper = this.props.name.toUpperCase();        

    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
          this.templatePath('./'),
          this.destinationPath('./'), {
            name: this.props.name,
            name_upper: this.props.name_upper,
            name_capitalize: this.props.name_capitalize,
            description: this.props.description,
            version: this.props.version,
            repository: this.props.repository,
            author: this.props.author,
            email: this.props.email,
            license: this.props.license
          }
      );
  },

  install: function () {
    //this.installDependencies();
  }
});
