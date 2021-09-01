import os
import sys
import tools


args = sys.argv
needs_css = False
needs_js = False

if len(args) >= 3:
    needs_css = True

if len(args) >= 4:
    needs_js = True


if os.path.isfile("ez.js"):
    print("ez.js Found")
    if os.path.isfile(args[1]):
        print(f"{args[1]} File found")
        if not os.path.exists("../FrontEnd/blogs"):
            print("Out dir not found, making one")
            os.makedirs(".../FrontEnd/blogs/")
        else: print("Out dir found")

        if needs_css:
            css = args[2]
        else: css=None
        
        if needs_js:
            js = args[3]
        else: js=None
        output = tools.get_data(args[1], js, css)

        ez_js = open("ez.js", 'r').read()
        open(".../FrontEnd/blogs/ez.js", "w").write(ez_js)

        if args[1].endswith(".ez"):
            out_file_name = os.path.basename(args[1])[:-3]
        else: out_file_name = os.path.basename(args[1])
        open(f".../FrontEnd/blogs/{out_file_name}.html", 'w').write(output)
        print("Linking Job Done")
        print("-"*50)