---
title: "Hello World"
date: 2022-10-13T15:59:36+07:00
draft: true
---

Hi! My name is Hải, or you can call me **Leo**. And this is my personal site. Hope you like it.

```python
from datetime import datetime

class Coder:
    name = None
    nickname = None
    country = None
    year_of_exp = None
    languages = ()
    databases = ()

    def work(self):
        print("My back hurts..... (●︿●)")

me = Coder()
me.name = "Lưu Viết Hải"
me.nickname = "Leo"
me.country = "Việt Nam 🇻🇳"
me.year_of_exp = round((datetime.now() - datetime(2018, 10, 15)).days, 2)
me.programming_languages = ("Javascript", "PHP", "Python", "C#", "Node.JS", "Go", "...")
me.databases = ("MySQL", "MongoDB")

me.work()
```
