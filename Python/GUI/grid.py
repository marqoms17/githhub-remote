from tkinter import *

root = Tk()

myLabel1 = Label(root, text='NAME')
myLabel2 = Label(root, text='\tADDRESS\t')
myLabel3 = Label(root, text='\tAGE\t')
myLabel4 = Label(root, text='Marqoms')
myLabel5 = Label(root, text='\tJakarta\t')
myLabel6 = Label(root, text='\t 28\t')

myLabel1.grid(row=0, column=0)
myLabel2.grid(row=0, column=1)
myLabel3.grid(row=0, column=2)
myLabel4.grid(row=1, column=0)
myLabel5.grid(row=1, column=1)
myLabel6.grid(row=1, column=2)

root.mainloop()
