import random
import datetime
from customer import Customer

atm = Customer(id)

while True:

    id = int(input('Masukkan Pin Anda : '))
    trial = 0

    while (id != int(atm.checkPin()) and trial < 3):
        id = int(input('Pin anda salah. Silakan masukkan lagi: '))

        trial += 1

        if trial == 3:
            print('Error. Silakan ambil kartu dan coba lagi..')
            exit()

    while True:
        print('='*36)
        print('  Selamat Datang di ATM Bank Python')
        print('='*36)
        print('Pilihan menu:\n ')
        print('1. Cek saldo')
        print('2. Debet')
        print('3. Simpan')
        print('4. Ganti Pin')
        print('5. Keluar')

        selectMenu = int(input('Silakan pilih menu: '))
        print()
        if selectMenu == 1:
            print('Saldo anda saat ini : Rp.' + str(atm.checkBalance()) + '\n')

        elif selectMenu == 2:
            nominal = float(input('Uang yang akan anda ambil : '))

            verify_withdraw = input(
                'Konfirmasi: Anda akan melakukan debet dengan nominal berikut? y/n ' + str(nominal) + ' ')

            if verify_withdraw == 'y':
                print('Saldo awal anda adalah '+str(atm.checkBalance())+' ')
            else:
                break

            if nominal < atm.checkBalance():
                atm.withDrawBalance(nominal)
                print('Transaksi debit berhasil')
                print('Saldo sisa sekarang : Rp.' +
                      str(atm.checkBalance()) + ' ')
            else:
                print('Maaf saldo anda tidak mencukupi')
                print('Silakan lakukan penambahan saldo')

        elif selectMenu == 3:
            nominal = float(input('Uang yang akan anda simpan : '))
            verify_deposit = input(
                'Konfirmasi: Anda akan melakukan deposit dengan nominal berikut? y/n ' + str(nominal) + ' ')

            if verify_deposit == 'y':
                atm.depositBalance(nominal)
                print('Saldo anda sekarang adalah Rp.' +
                      str(atm.checkBalance()) + '\n')
            else:
                break

        elif selectMenu == 4:
            verify_pin = int(input('Silakan masukan pin anda : '))

            while verify_pin != int(atm.checkPin()):
                print('Pin anda salah silakan masukkan pin : ')

            update_pin = int(input('Silakan masukkan pin anda yang baru : '))
            print('Pin anda berhasil diganti')

            verify_newpin = int(input('Coba masukkan pin baru : '))

            if verify_newpin == update_pin:
                print('Pin baru anda sukses')
            else:
                print('Pin anda salah')

        elif selectMenu == 5:
            print('Resi tercetak otomatis saat anda keluar \n Harap simpan tanda terima ini \n Sebagai bukti transaksi anda.')
            print('No. Record ', random.randint(100000, 1000000))
            print('Tangal : ', datetime.datetime.now())
            print('Saldo akhir : ', atm.checkBalance())
            print('='*40)
            print('Terimakasih telah menggunakan ATM PYTHON')
            print('='*40)
            exit()

        else:
            print('Error, Maaf Menu tidak tersedia')
