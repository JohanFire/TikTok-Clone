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
    # Inside TikTok directory
    python3 manage.py migrate
```
This create the DB, execute Django migrations, etc.
It uses by default with SQLite
