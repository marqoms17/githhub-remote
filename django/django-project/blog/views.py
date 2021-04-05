# views blog

from django.shortcuts import render


def index(request):
    context = {
        'judul': 'Marqoms Website',
        'subjudul': 'Selamat Datang di Blog ini'
    }
    return render(request, 'blog/index.html', context)
