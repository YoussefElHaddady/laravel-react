# Laravel React

First project including react and laravel

## install & Setup the environment

to run laravel we'll need to have `php` and `composer`

1. install `php`
    1. go to [php.net > downloads section](https://www.php.net/downloads)
    1. click [Windows downloads](https://windows.php.net/download#php-8.0)
       NB. make sure to download php >= 7.3.x (we recommend v8.0)
    1. download the Zip file
    1. extract this file to any path you prefer
       NB. we recommend to extract this file to `C:\Program Files\PHP`
       ![php folder](https://github.com/YoussefElHaddady/edictionary/blob/main/captures/php-folder.PNG)
    1. add this folder to your envirenment path variable
    1. check the installation
       in your cmd :
        ```console
        php -v
        ```
        if you got the version of php so congrats
1. install `composer`
    1. go to [composer web site](https://getcomposer.org/)
    1. click `Download`
    1. in `Windows installer` section click [Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe)
    1. execute the `.exe` file and follow the steps
    1. browse to your user folder and search for `AppData\Roaming\Composer\vendor\bin` copy that path and add it to your envirenment path variable
    1. check the installation
       in your cmd:
        ```console
         composer -V
        ```
        if you got the version of composer so congrats
1. install `Laravel`
    - go to laravel web site, follow the steps in the [The Laravel Installer](https://laravel.com/docs/8.x#the-laravel-installer) section
      or simply
    - run the following command in your cmd
    ```console
    composer global require laravel/installer
    ```
1. Create project
   run the following command in your cmd
    ```console
    laravel new your-app-name
    ```
1. run the project

    1. run the following command in your cmd
        ```console
        cd your-app-name
        php artisan serve
        ```
    1. in your browser go to `localhost:8000`

1. include ReactJS
    1. installing React UI scaffolding
        ```console
        composer require laravel/ui
        ```
    1. generate basic scaffolding
        ```console
        php artisan ui react
        ```
    1. ```console
       npm install
       ```
    1. ```console
       npm run watch
       ```
    1. a ReactJS component will be created under `resources/js/components/Examples.js`

## working up on the project

1. cleaning up the project
   remove all not necessary codes

    1. change `resources/views/welcome.blade.php` file content to :

        ```html
        <!DOCTYPE html>
        <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
            <head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <title>Laravel - React</title>
            </head>

            <body>
                <div id="root"></div>

                <script src="{{ asset('js/app.js') }}"></script>
            </body>
        </html>
        ```
