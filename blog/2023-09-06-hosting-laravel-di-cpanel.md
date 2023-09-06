---
slug: hosting-laravel-di-cpanel
title: Hosting Laravel di cPanel
authors: [ralfarishi]
tags: ["deployment", "laravel", "cpanel"]
---

![Thumbnail](/img/blogs/hosting-laravel-di-cpanel/thumbnail.png)

Pada tutorial ini, saya akan menjelaskan langkah-langkah untuk meng-hosting aplikasi Laravel di lingkungan cPanel. cPanel adalah salah satu kontrol panel web populer yang digunakan untuk mengelola hosting web.

<!--truncate-->

# Persiapan

1. Buka folder project laravel yang kalian punya.
2. Kompres folder public ke dalam format `.zip`.

![Kompres Folder Public](/img/blogs/hosting-laravel-di-cpanel/public-to-zip-1.png)

Hasil:

![Hasil Kompres Folder Public](/img/blogs/hosting-laravel-di-cpanel/public-to-zip-2.png)

3. Selanjutnya, pilih semua folder menggunakan **CTRL+A**, kecuali folder `public` dan `public.zip`.

![Seleksi Selain Folder Public](/img/blogs/hosting-laravel-di-cpanel/seleksi-selain-folder-public.png)

![Seleksi Selain Folder Public 2](/img/blogs/hosting-laravel-di-cpanel/seleksi-selain-folder-public-2.png)

4. **Ubah** nama folder hasil `zip` menjadi nama project. Contoh `lara-blog.zip`.

![Ubah Nama Folder ZIP](/img/blogs/hosting-laravel-di-cpanel/zip-laravel.png)

5. Sehingga hasil akhirnya terdapat **dua buah folder** `.zip`, yaitu `public.zip` dan `nama-project.zip`.

![Semua Folder ZIP](/img/blogs/hosting-laravel-di-cpanel/semua-folder-zip.png)

# Upload ke cPanel

1. Buka **File Manager** di cPanel.
2. Buka folder `public_html` dan upload `public.zip` di folder tersebut.
3. Jika upload telah selesai, extract folder `.zip`. Sehingga terlihat seperti gambar di bawah:

![Ekstrak Folder ZIP](/img/blogs/hosting-laravel-di-cpanel/extract-public-zip.png)

4. Masuk ke folder `public` yang telah di extract. Lalu, **pilih semua** folder dan file.

![Pilih Semua Folder](/img/blogs/hosting-laravel-di-cpanel/select-all.png)

5. **Pindahkan** folder dan file yang telah dipilih ke `public_html`.

![Pindah Folder](/img/blogs/hosting-laravel-di-cpanel/pindah-ke-public-html.png)

6. Selanjutnya, edit file `index.php` yang ada pada folder `public_html`.
7. Ubah kode program dari:

```php
$maintenance = __DIR__.'/../storage/framework
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
```

Menjadi:

```php
$maintenance = __DIR__.'/../lara-blog/storage/framework
require __DIR__.'/../lara-blog/vendor/autoload.php';
$app = require_once __DIR__.'/../lara-blog/bootstrap/app.php';
```

:::note
nama folder `lara-blog` disesuakan dengan nama project yang anda miliki.
:::

8. Buat folder baru dengan nama project di folder root (halaman folder awal).

![Buat Folder di Root](/img/blogs/hosting-laravel-di-cpanel/buat-folder-di-root.png)

9. Upload dan extract project laravel di folder baru tersebut. Sehingga hasilnya seperti gambar di bawah.

![Upload Laravel](/img/blogs/hosting-laravel-di-cpanel/upload-laravel.png)

10. Buka file `.env` dan edit file tersebut dari:

```dot
APP_ENV=local
APP_DEBUG=true
```

Menjadi:

```dot
APP_ENV=production
APP_DEBUG=false
```

~ SELESAI ~
