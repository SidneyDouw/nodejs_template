fs = require('fs');
cp = require('child_process');

const folder = process.argv[2];


let globalError = false;


function handleErr(err) {
    if (err) {
        globalError = true;
        cp.exec('rm -r development/' + folder);
        console.log("Error\n")
        console.log('Removing ' + folder + ' project');
        console.error('\n' + err.message + '\n');
        return false;
    }
    return true;
}


// Create project directory

fs.mkdir('./development/' + folder, (err) => {

    if (err) {
        if (err.code == 'EEXIST') {
            console.error('This project name already exists! Please choose a different name')
            globalError = true;
            return;
        }
        throw err;
    }
    
    console.log("Creating '" + folder + "' project");
    console.log("");


    // Create src directory

    fs.mkdir('./development/' + folder + '/src/', (err) => {
        if (!handleErr(err)) return;
        console.log("Creating 'src' folder");


        // Create index.html

        //     data =  '<!DOCTYPE html>\n' +
        //     '<html lang="en">\n' +
        //     '\t<head>\n\n' +

        //     '\t\t<meta charset="UTF-8">\n' + 
        //     '\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' + 
        //     '\t\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n\n' + 

        //     '\t\t<link rel="stylesheet" href="css/styles.min.css">\n' +
		//     '\t\t<script src="js/index.min.js" defer></script>\n\n' +

        //     '\t\t<title>Document</title>\n\n' +

        //     '\t</head>\n\n' +

        //     '\t<body>\n\n' +

        //     '\t</body>\n\n' +

        //     '</html>\n';

        // fs.writeFile('./development/' + folder + '/src/index.html', data, (err) => {
        // if (!handleErr(err)) return;
        // console.log("Creating 'index.html'");
        // });


        // Create less directory

        fs.mkdir('./development/' + folder + '/src/less', (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'less' folder");


            // Create styles.less

            data = "html, body {\n" + 
                        "\tmargin: 0;\n" + 
                        "\tbackground: #ccc;\n" + 
                    "}"

            fs.writeFile('./development/' + folder + '/src/less/styles.less', data, (err) => {
                if (!handleErr(err)) return;
                console.log("Creating 'styles.less'");
            });
        });


        // Create js directory

        // fs.mkdir('./development/' + folder + '/src/js', (err) => {
        //     if (!handleErr(err)) return;
        //     console.log("Creating 'js' folder");


        //     // Create index.js

        //     data = "console.log('Hello, World!');";

        //     fs.writeFile('./development/' + folder + '/src/js/index.js', data, (err) => {
        //         if (!handleErr(err)) return;
        //         console.log("Creating 'index.js'");
        //     });
        // });

        // Create ts directory

        fs.mkdir('./development/' + folder + '/src/ts', (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'ts' folder");


            // Create index.ts

            data = "console.log('Hello, World!');";

            fs.writeFile('./development/' + folder + '/src/ts/index.ts', data, (err) => {
                if (!handleErr(err)) return;
                console.log("Creating 'index.ts'");
            });
        });

        // Create views directory

        fs.mkdir('./development/' + folder + '/src/views', (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'src/views' folder");

            fs.mkdir('./development/' + folder + '/src/views/templates', (err) => {
                if (!handleErr(err)) return;
                console.log("Creating 'src/views/templates' folder");
            });
            fs.mkdir('./development/' + folder + '/src/views/includes', (err) => {
                if (!handleErr(err)) return;
                console.log("Creating 'src/views/includes' folder");
            });
            fs.mkdir('./development/' + folder + '/src/views/mixins', (err) => {
                if (!handleErr(err)) return;
                console.log("Creating 'src/views/mixins' folder");
            });


            // Create static.pug

            data = '<!DOCTYPE html>\n' + 
                    'html(lang="en")\n' + 
                        '\thead\n\n' + 
                    
                            '\t\tmeta(charset="UTF-8")\n' + 
                            '\t\tmeta(name="viewport", content="width=device-width, initial-scale=1.0")\n' + 
                            '\t\tmeta(http-equiv="X-UA-Compatible", content="ie=edge")\n\n' + 
                    
                            '\t\tlink(rel="stylesheet", href="css/styles.min.css")\n' + 
                            '\t\tscript(src="js/index.min.js", defer="true")\n\n' + 
                    
                            '\t\ttitle Static Content\n\n' + 
                    
                        '\tbody\n\n'

            fs.writeFile('./development/' + folder + '/src/views/index.pug', data, (err) => {
                if (!handleErr(err)) return;
                console.log("Creating 'index.pug'");
            });
        });
    });


    // Create server directory

    fs.mkdir('./development/' + folder + '/server/', (err) => {
        if (!handleErr(err)) return;
        console.log("Creating 'server' folder");


        // Create app.js

        data = "// app.js\n\n\n\n" + 



                "const express = require('express');\n" + 
                "const app = express();\n\n" + 

                "app.set('view engine', 'pug');\n\n" + 

                "app.use(express.static('dist/'));\n\n" + 

                "app.listen(8080, 'localhost', () => {\n" + 
                    "\tconsole.log('Server started. Listening on Port 8080');\n" + 
                "});"

        fs.writeFile('./development/' + folder + '/server/app.js', data, (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'app.js'");
        });
    });

    // Create views directory

    fs.mkdir('./development/' + folder + '/views', (err) => {
        if (!handleErr(err)) return;
        console.log("Creating 'views' folder");

        fs.mkdir('./development/' + folder + '/views/templates', (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'views/templates' folder");
        });
        fs.mkdir('./development/' + folder + '/views/includes', (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'views/includes' folder");
        });
        fs.mkdir('./development/' + folder + '/views/mixins', (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'views/mixins' folder");
        });


        // Create dynamic.pug

        data = '<!DOCTYPE html>\n' + 
                'html(lang="en")\n' + 
                    '\thead\n\n' + 
                
                        '\t\tmeta(charset="UTF-8")\n' + 
                        '\t\tmeta(name="viewport", content="width=device-width, initial-scale=1.0")\n' + 
                        '\t\tmeta(http-equiv="X-UA-Compatible", content="ie=edge")\n\n' + 
                
                        '\t\tlink(rel="stylesheet", href="css/styles.min.css")\n' + 
                        '\t\tscript(src="js/index.min.js", defer="true")\n\n' + 
                
                        '\t\ttitle Dynamic Content\n\n' + 
                
                    '\tbody\n\n'

        fs.writeFile('./development/' + folder + '/views/dynamic.pug', data, (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'dynamic.pug'");
        });
    });


    // Create package.json
    
    fs.readFile('package.json', (err, data) => {
        if (!handleErr(err)) return;

        let pckg = JSON.parse(data);

        pckg.name = folder;
        pckg.description = "";
        pckg.scripts = {
            start:  'node server/app.js',
            dev:    'gulp',
            build:  'gulp build -p'
        };

        data = JSON.stringify(pckg, null, 2);

        fs.writeFile('./development/' + folder + '/package.json', data, (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'package.json'");
        });
    });

    // Create bower.json
    
    // fs.readFile('bower.json', (err, data) => {
    //     if (!handleErr(err)) return;

    //     let pckg = JSON.parse(data);

    //     pckg.name = folder;
    //     pckg.description = "";
    //     pckg.scripts = {};

    //     data = JSON.stringify(pckg, null, 2);

    //     fs.writeFile('./development/' + folder + '/bower.json', data, (err) => {
    //         if (!handleErr(err)) return;
    //         console.log("Creating 'bower.json'");
    //     });
    // });


    // Create gulpfile.js
    
    fs.readFile('.gulpfile.default.js', (err, data) => {
        if (!handleErr(err)) return;

        data += "\n\n\n\n";
        data += "// Gulp Functions";
        data += "\n\n\n\n";

        fs.writeFile('./development/' + folder + '/gulpfile.js', data, (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'gulpfile.js'");

            fs.readdir('./tasks', (err, files) => {
                if (!handleErr(err)) return;
                files.forEach((file) => {
                    const f = require('./tasks/' + file);

                    file = file.substring(5, file.length);
                    file = 'function ' + file.substring(0, file.length-3);

                    let data = f.toString() + "\n\n\n\n";
                    data = file + data.substring(8, data.length)

                    fs.appendFile('./development/' + folder + '/gulpfile.js', data, (err) => {
                        if (!handleErr(err)) return;
                    });
                });
            });
        });
    });


    // Create gulp-config.js
    
    fs.readFile('.gulp-config.default.js', (err, data) => {
        if (!handleErr(err)) return;
        fs.writeFile('./development/' + folder + '/gulp-config.js', data, (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'gulp-config.js'");
        });
    });


    // Create tsconfig.json
    
    fs.readFile('tsconfig.json', (err, data) => {
        if (!handleErr(err)) return;
        fs.writeFile('./development/' + folder + '/tsconfig.json', data, (err) => {
            if (!handleErr(err)) return;
            console.log("Creating 'tsconfig.json'");
        });
    });


    if (!globalError) {
        cp.exec('code -n ./development/' + folder + '/');
    }

});