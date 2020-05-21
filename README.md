# Micro Blog

## Uygulama Hakkında
* Uygulama holochain - rust ilişkisi kullanılarak servisi hazırlandı.
* Uygulama içinde ortama uygun blog post ekleme ve node bilgisini kullanarak paylaşılan postları döndüren servisler yazıldı.
* Servislerden dönen veriler Web ortamında gösterilmek üzere hazırlandı.


## Gerekli Hazırlıklar

* [Nix](https://nixos.org/) kurulumu yapılmalıdır.

## Nasıl çalıştırılır

### Nix ortamını hazırlama

``` console
$ nix-shell https://holochain.love
```

### Paketleri derleme

``` console
$ cd blog_core
$ hc package
```

### Uygulamayı başlatma

``` console
$ hc run
```

### Uygulamayı önizleme

#### [http://127.0.0.1:8888/](http://127.0.0.1:8888/)

## Ekran Görüntüleri

### Web Görüntü
<img src="./screenshot/web.png" />
