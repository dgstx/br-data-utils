#!/bin/bash

# Script para testar o projeto com diferentes versões do Node.js
# Simulando o ambiente do CI

echo "Testando com Node.js 14.x"
docker run --rm -v $(pwd):/app -w /app node:14 npm ci
docker run --rm -v $(pwd):/app -w /app node:14 npm test

echo "Testando com Node.js 16.x"
docker run --rm -v $(pwd):/app -w /app node:16 npm ci
docker run --rm -v $(pwd):/app -w /app node:16 npm test

echo "Testando com Node.js 18.x"
docker run --rm -v $(pwd):/app -w /app node:18 npm ci
docker run --rm -v $(pwd):/app -w /app node:18 npm test

echo "Testando com Node.js 20.x"
docker run --rm -v $(pwd):/app -w /app node:20 npm ci
docker run --rm -v $(pwd):/app -w /app node:20 npm test