FROM php:7.4-apache-bullseye

RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libzip-dev \
        unzip; \
    docker-php-ext-configure gd --with-freetype --with-jpeg; \
    docker-php-ext-install -j"$(nproc)" gd mysqli pdo_mysql zip; \
    a2enmod rewrite headers expires; \
    rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/user/data/www/club-monet.ru
