def get_data(ez_data, js = None, css = None):
    
    if not js and not css:
        data = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site</title>
</head>
<body>
    <xmp id="md" style="display: none;">{open(ez_data, "r").read()}</xmp>
<script src="ez.js"></script>
</body>
</html>'''


    if js:
        data = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site</title>
</head>
<body>
    <xmp id="md" style="display: none;">{open(ez_data, "r").read()}</xmp>
<script src="ez.js"></script>
</body>
<script src="{js}"></script>
</html>'''


    if css:
        data = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site</title>
    <link rel="stylesheet" href="{css}">
</head>
<body>
    <xmp id="md" style="display: none;">{open(ez_data, "r").read()}</xmp>
    <script src="ez.js"></script>
</body>
</html>'''


    if css and js:
        data = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site</title>
    <link rel="stylesheet" href="{css}">
</head>
<body>
    <xmp id="md" style="display: none;">{open(ez_data, "r").read()}</xmp>
    <script src="ez.js"></script>
</body>
<script src="{js}"></script>
</html>'''


    return data