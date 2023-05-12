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
