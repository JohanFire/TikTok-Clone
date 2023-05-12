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