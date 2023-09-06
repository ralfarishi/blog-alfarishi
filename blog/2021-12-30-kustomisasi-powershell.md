---
slug: kustomisasi-windows-powershell
title: Kustomisasi Windows Powershell
authors: [ralfarishi]
tags: ["powershell", "custom", "tutorial"]
---

![Thumbnail](/img/blogs/kustomisasi-windows-powershell/wsl-thumb.png)

PowerShell adalah sebuah command line interface (CLI) berupa antarmuka baris
perintah dan bahasa scripting yang dikembangkan oleh Microsoft, untuk tujuan
otomatisasi tugas dan manajemen konfigurasi.

<!--truncate-->

# Oh My Posh

Oh My Posh adalah custom prompt engine yang mempunyai kemampuan untuk
menyesuaikan prompt string dengan fungsi atau variabel.

:::info
Pastikan sudah mendownload Windows Powershell [disini.](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3#installing-the-msi-package)
:::

# Instalasi

1. Buka Windows Powershell yang telah di-install.
2. Download package Oh My Posh menggunakan winget.

```powershell
winget install JanDeDobbeleer.OhMyPosh -s winget
```

4. Jika sudah ter-install dengan benar, lakukan setup powershell profile dengan membuka file `$PROFILE`.

```powershell
notepad $PROFILE
```

5. Tambahkan script berikut pada file tersebut.

```powershell
oh-my-posh init pwsh | Invoke-Expression
```

6. Jika sudah, reload powershell profile.

```powershell
. $PROFILE
```

7. Selanjutnya install Nerd Font pada Oh My Posh agar dapat menggunakan beberapa icon.
8. Pada prompt powershell masukkan perintah seperti di bawah:

```powershell
oh-my-posh font install
```

:::caution
jika perintah `oh-my-posh` tidak berfungsi, coba lakukan restart powershell dengan cara membuka ulang
:::

9. Pilih font yang ingin di-install. Font yang direkomendasikan adalah _Meslo_.

![Choose Font](/img/blogs/kustomisasi-windows-powershell/choose-font.png)

10. Buka halaman settings powershell untuk mengkonfigurasi font yang sudah di-install dengan cara menekan tombol `ctrl + ,`.
11. Pilih profile yang ingin dikustomisasi atau pilih default.

![Font Config](/img/blogs/kustomisasi-windows-powershell/font-config.png)

12. Pada sub menu **Additional Settings** pilih **Appearance**.

![Appearance Setting](/img/blogs/kustomisasi-windows-powershell/font-config-2.png)

13. Lalu, ubah font pada bagian **Font face**.

![Jenis Font](/img/blogs/kustomisasi-windows-powershell/font-config-3.png)

# Kustomisasi Tema

Tahap berikutnya adalah melakukan kustomisasi tema Oh My Posh. Untuk
mengetahui tema apa saja yang disediakan oleh Oh My Posh dapat menggunakan
perintah di bawah pada powershell.

```powershell
Get-PoshTheme
```

:::info
Atau bisa mengunjunginya langsung di link [ini.](https://ohmyposh.dev/docs/themes)
:::

1. Apabila sudah menetukan tema yang diinginkan, buka kembali file `$PROFILE`.
2. Kemudian ubah isi file tersebut menjadi seperti contoh di bawah.

```powershell
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/nama-tema.omp.json" | Invoke-Expression

# contoh
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/hul10.omp.json" | Invoke-Expression
```

3. Save dan reload file tersebut agar konfigurasi bisa diterapkan.

~ Selesai ~
