# TikTok-Clone
A TikTok clone using Django + React Native

---

## Python enviroment
Create enviroment inside TikTok-server directory:
```bash
    python -m venv .venv
```
Activate enviroment:
```bash
    # bash
    . .venv/Scripts/activate
    
    # bash Linux
    . .venv/bin/activate

    # cmd
    cd .venv/
    cd Scripts/
    activate
```

---

## Start Django-project
Install django:
```bash
    # make sure of being inside virtual enviroment
    pip3 install django
```

Start project:
```bash
    django-admin startproject TikTok
```

Run server:
```bash
    # Inside TikTok directory
    python3 manage.py runserver
```

Run migrations:
```bash
    python manage.py migrate
```
This create the DB, execute Django migrations, etc.
It uses by default with SQLite

### Create Django's Superuser
```bash
    python manage.py createsuperuser
```

---

## Override user model
Create user app in django:
```bash
    python manage.py startapp users
```
Now go yo Installed Apps in [settings.py](./TikTok-server/TikTok/TikTok/settings.py) and add 'users' app.

Now we have to tell to Django that this user app will contain all Users. How to do this little override?
In the same file, go to the very bottom and add the line:
```python
# users
AUTH_USER_MODEL = 'users.User'
```

### Create user Model:
do in [models.py](./TikTok-server/TikTok/users/models.py):
```python
    from django.contrib.auth.models import AbstractUser
    # AbstractUser include all actual user properties from a django user

    # so now every User will include AbstractUser properties 
    # + the ones I add here
    class User(AbstractUser):
        pass
```

### Delete actual database in order to regenerate it.
[db.sqlite3](./TikTok-server/TikTok/db.sqlite3)

MakeMigrations of new user created:
```bash
    # generate migrations with new app
    python manage.py makemigrations
    # then regenerate db with new migration
    python manage.py migrate
```

Then create a Superuser again.

### Show User group in the Django's Admin panel
ir oder to show the group, we need to register it in:
[users/admin.py](./TikTok-server/TikTok/users/admin.py)

Specify what will be seen of each user in Admin Panel:
[users/admin.py](./TikTok-server/TikTok/users/admin.py) new code

### Login in Django's Admin panel using email
[users/models.py](./TikTok-server/TikTok/users/models.py)
```python
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
```
when doing this, won't be able to create a new superuser in console, only in django's admin panel.
If you want to do it by console you will have to comment the lines:
```python
    ...
    # USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = []
```

---

## automatically API Documentation
creating Automatic API Documentation in Swagger & redocs.
For this, will need the [drf-yasg](https://drf-yasg.readthedocs.io/en/stable/readme.html#usage) package:
```bash
    pip install -U drf-yasg
```
Now go yo Installed Apps in [settings.py](./TikTok-server/TikTok/TikTok/settings.py) and add 'drf_yasg' app.
And then write all code written in [TikTok/users.py](./TikTok-server/TikTok/TikTok/urls.py) in this same commit.

---

## Installing Django Rest Framework
For this, will need the [django-rest-framework](https://www.django-rest-framework.org/) package:
```bash
    pip install djangorestframework
```
read the docs so you can follow next steps, like adding to "INSTALLED_APPS"...

---

# React Native

## Create a new Expo project
```bash
    npx create-expo-app TikTok
```

## Run the project
```bash
    cd project-name
    npm start # you can also use: npx expo start
```
or...
To run your project, navigate to the directory and run one of the following npm commands.

- cd project-name
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- npm run web

---

### Install a Android Emulator with Android Studio
In this case I'll create a device with: Pixel_6_Pro_API_33_Tiramisu.
Once created and opened, you can run expo project and type "a" 
to open the app in the opened emulator.

```python
    Ctrl + M
```
will open Expo Tools in the emulator.

### Open app in iOS real device
Install Expo Go app, then scan QR code when running project

---

## Installing React Navigation
[React Navigation docs](https://reactnavigation.org/)
1.- Install it
```bash
    npm install @react-navigation/native
```
2.- Installing dependencies into an Expo managed project
```bash
    npx expo install react-native-screens react-native-safe-area-context
```
3.- Go to Hello React Navigation in docs and Install the native stack navigator library, is for stack pages
```bash
    npm install @react-navigation/native-stack
```
4.- For the bottom menu, go to Guides > Tab navigation
```bash
    npm install @react-navigation/bottom-tabs
```

---

## Installing React Native Elements
[React Native Elements docs](https://reactnativeelements.com/)
In this case I'm using version 3.4.2, so I wil recommend you to use the same to avoid problems.
1.- go to 3.4.2 and then go to 'Gettins Started'
```bash
    npm install react-native-elements
    # npm install react-native-elements@3.4.2
```
2.- Install react-native-vector-icons 
```bash
    npm install react-native-vector-icons
```

--- 

## Creating ThemeContext
Here will be the logic of all the Theme, of how will work the LightMode/DarkMode using a custom Hook..

First, let's install [React Native Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage), so we can save user's info in storage, so when he close the app, it can select the previous saved theme.
```npm
    npm i @react-native-async-storage/async-storage@1.17.11
```

---

# Authentication System
## Add a local IP to Django's server.
this is neccessary & helpful if you are working with Android Emulator

To get your IPv4:
```bash
    # if you are in Windows
    ipconfig

    # if you are in linux
    ifconfig
```

then run Django's server specifying IP with Port
```bash
    python manage.py runserver 192.168.1.13:8000
```

--- 

## Creating User Model
once you defined the User Model in [models.py](./TikTok-server/TikTok/users/models.py), make the migrations to apply changes in db
```bash
    python manage.py makemigrations

    python manage.py migrate
```

---

## Creating .env enviroment variables for security
create a ".env" file inside django project, I mean will be in the same folder as [settings.py](./TikTok-server/TikTok/TikTok/settings.py)

1.- install [django-environ](https://pypi.org/project/django-environ/)
```bash
    pip install django-environ
```

2.- inside .env file:
```env
    # example

    # DJANGO settings
    SECRET_KEY_LOCAL=hola
    DEBUG=bool
    ALLOWED_HOSTS=host_IP

    # CLOUDINARY
    CLOUDINARY_CLOUD_NAME=123
    CLOUDINARY_API_KEY=api12345
    CLOUDINARY_API_SECRET=secret123
```

in the [settings.py](./TikTok-server/TikTok/TikTok/settings.py) you have to:
```python
    import environ

    # Build paths inside the project like this: BASE_DIR / 'subdir'.
    BASE_DIR = Path(__file__).resolve().parent.parent

    # environ init
    env = environ.Env()
    environ.Env.read_env()

    # SECURITY WARNING: keep the secret key used in production secret!
    SECRET_KEY = env.str('SECRET_KEY_LOCAL')

    # SECURITY WARNING: don't run with debug turned on in production!
    DEBUG = env.bool('DEBUG', default=False)

    ALLOWED_HOSTS = tuple(env.list('ALLOWED_HOSTS', default=[]))
    # ALLOWED_HOSTS = ["*"] # this means all IPs are allowed to join

    ...

    # CLOUDINARY
    CLOUDINARY_STORAGE = {
        'CLOUD_NAME': env.str('CLOUDINARY_CLOUD_NAME'),
        'API_KEY': env.str('CLOUDINARY_API_KEY'),
        'API_SECRET': env.str('CLOUDINARY_API_SECRET')
    }
```

---

## Cloudinary & Static Files
we will use [Cloudinary](https://cloudinary.com/) to manage & visualize all our static files(photos & videos).
Due Django's is not well prepared to manage static files, altough it is possible.

1.- in order to connect Cloudinary with Django, we must use [django-cloudinary-storage](https://pypi.org/project/django-cloudinary-storage/):
```bash
    pip install django-cloudinary-storage
```

2.- put in [INSTALLED_APPS](./TikTok-server/TikTok/TikTok/settings.py):
```python
    #Once you have done that, add cloudinary and cloudinary_storage to you installed apps in your settings.py. 
    # If you are going to use this package for static and/or media files, 
    # make sure that cloudinary_storage is before django.contrib.staticfiles:
    INSTALLED_APPS = [
        # ...
        'cloudinary_storage',
        'django.contrib.staticfiles',
        'cloudinary',
        # ...
    ]


    # because django-cloudinary-storage overwrites Django collectstatic command. 
    # If you are going to use it only for media files though, 
    # it is django.contrib.staticfiles which has to be first:
    INSTALLED_APPS = [
        # ...
        'django.contrib.staticfiles',
        'cloudinary_storage',
        'cloudinary',
        # ...
    ]
```