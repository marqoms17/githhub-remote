from tkinter import *

root = Tk()


def myClick():
    myLabel = Label(root, text='Tombol apa tu man? ini tombol puyoh!!')
    myLabel.pack()


myButton = Button(root, text='Click Disini!',
                  command=myClick, fg='#000', bg='sky blue')
myButton.pack()

root.mainloop()
