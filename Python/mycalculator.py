from os import system


def header():
    print("="*40)
    salam = "My_calculator"
    print(salam.center(41, ' '))
    print("="*40)


def tambah(a, b):
    return a+b


def kurang(a, b):
    return a-b


def bagi(a, b):
    return a/b


def kali(a, b):
    return a*b


while True:

    system('clear')
    header()
    print("\nHai bro! Selamat datang di My_calculator")
    print('\nPilih operasi : \n')
    print('1. Penjumlahan')
    print('2. Pengurangan')
    print('3. Perkalian')
    print('4. Pembagian')
    print('0. Keluar')
    pilih = input('\nPilihan Anda : ')
    if pilih == '0':
        print('\n\t\t---END---')
        break
    elif pilih in ('1', '2', '3', '4'):
        num1 = float(input('Masukan angka pertama = '))
        num2 = float(input('Masukan angka kedua = '))

        if pilih == '1':
            print(f'{num1} + {num2} = ', tambah(num1, num2))
        elif pilih == '2':
            print(f'{num1} - {num2} = ', kurang(num1, num2))
        elif pilih == '3':
            print(f'{num1} * {num2} = ', kali(num1, num2))
        elif pilih == '4':
            print(f'{num1} / {num2} = ', bagi(num1, num2))

    else:
        print('Pilihan yang anda masukkan salah!')

    input('\n----Tekan Enter untuk melanjutkan----')
