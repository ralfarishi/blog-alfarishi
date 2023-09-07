---
slug: menyimpan-tabel-di-excel-menjadi-format-gambar-dengan-vba
title: Menyimpan Tabel di Excel Menjadi Format Gambar Dengan VBA
authors: [ralfarishi]
tags: ["excel", "vba", "tutorial"]
description: Cara menyimpan tabel excel ke format gambar menggunakan VBA.
keywords: ["konversi tabel menjadi gambar", "tutorial excel vba"]
images: /img/blogs/menyimpan-tabel-di-excel-menjadi-format-gambar-dengan-vba/thumbnail.png
---

![Thumbnail](/img/blogs/menyimpan-tabel-di-excel-menjadi-format-gambar-dengan-vba/thumbnail.png)

Pada artikel ini saya akan memberikan tutorial bagaimana cara menyimpan tabel
di excel hanya dengan satu tombol menggunakan script macro VBA. Sebelum
memulai tutorial pastikan sudah mengaktifkan fitur Developer, apabila belum
diaktifkan anda bisa mengunjungi tutorial pada link [ini.](https://mjurnal.com/excel-dasar/macro-vba-excel-cara-aktifkan-developer-tab/#gsc.tab=0)

<!--truncate-->

Hal pertama yang harus dilakukan adalah membuat tombol. Untuk membuat tombol
perhatikan langkah-langkah berikut:

1. Buka tab Developer dan pilih Insert.
2. Pada Form Controls pilih simbol persegi panjang seperti yang terlihat pada gambar di bawah.

![Membuat Tombol](/img/blogs/menyimpan-tabel-di-excel-menjadi-format-gambar-dengan-vba/membuat-tombol.png)

3. Letakkan tombol pada lembar kerja excel dan secara otomatis akan membuka dialog macro.
4. Buat macro baru dengan nama `*Konversi` dan pilih New.

:::info
(\*) Nama macro bisa diberikan sesuai keinginan
:::

![Membuat Macro](/img/blogs/menyimpan-tabel-di-excel-menjadi-format-gambar-dengan-vba/membuat-macro.png)

5. Setelah membuat macro, otomatis akan membuka lembar kerja VBA dengan nama macro yang telah dibuat sebelumnya.

![Tampilan VBA](/img/blogs/menyimpan-tabel-di-excel-menjadi-format-gambar-dengan-vba/tampilan-vba.png)

6. Selanjutnya tambahkan script berikut ke dalam method macro tersebut.

```visual-basic
Sub Konversi()
    Dim ChO As ChartObject, ExportName As String
    Dim CopyRange As Range
    Dim Pic As Picture
    Dim i As Long

    With ActiveSheet
      Set CopyRange = Range("C6:G16") 'sesuaikan range tabel yang ingin dikonversi
      If Not CopyRange Is Nothing Then
        Application.ScreenUpdating = False
        ExportName = Application.GetSaveAsFilename(InitialFileName:="Tabel_", fileFilter:="PNG Files (*.png), *.png")
        If Not ExportName = "False" Then
          CopyRange.Copy
          .Pictures.Paste
          Set Pic = .Pictures(.Pictures.Count)
          Set ChO = .ChartObjects.Add(Left:=10, Top:=10, Width:=Pic.Width, Height:=Pic.Height)
          Application.CutCopyMode = False
          Do
            DoEvents
            Pic.Copy
            DoEvents
            ChO.Chart.Paste
            DoEvents
            i = i + 1
          Loop Until (ChO.Chart.Shapes.Count > 0 Or i > 50)
            ChO.Chart.Export Filename:=ExportName, Filtername:="PNG"
            ChO.Delete
            Pic.Delete
        End If
        Application.ScreenUpdating = True
      End If
    End With
End Sub
```

:::info
Pada bagian `Set CopyRange = Range("C6:G16")` ubah `"C6:G16"` menjadi
range tabel yang anda miliki.
:::

7. Jalankan macro tersebut dengan menekan tombol yang telah dibuat sebelumnya.
8. Apabila semua sudah sesuai, otomatis akan membuka file explorer untuk menetukan lokasi gambar yang akan disimpan.

![Simpan Tabel](/img/blogs/menyimpan-tabel-di-excel-menjadi-format-gambar-dengan-vba/simpan-tabel.png)

9. Simpan file tersebut.

~ SELESAI ~
