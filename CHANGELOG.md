# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-17

### Added
- **CPF Module** (`./cpf`)
  - `formatCPF()` - Format CPF with standard mask (XXX.XXX.XXX-XX)
  - `validateCPF()` - Validate CPF number including check digits
  - Support for CPF with or without formatting
  - Comprehensive test coverage for edge cases

- **CNPJ Module** (`./cnpj`)
  - `formatCNPJ()` - Format CNPJ with standard mask (XX.XXX.XXX/XXXX-XX)
  - `validateCNPJ()` - Validate CNPJ number including check digits
  - Support for CNPJ with or without formatting
  - Comprehensive test coverage for edge cases

- **CEP Module** (`./cep`)
  - `formatCEP()` - Format CEP/ZIP code (XXXXX-XXX)
  - `validateCEP()` - Validate CEP format
  - Support for various CEP input formats
  - Comprehensive test coverage for edge cases

- **Telefone Fixo Module** (`./telefone-fixo`)
  - `formatTelefoneFixo()` - Format fixed phone numbers
  - `validateTelefoneFixo()` - Validate fixed phone format
  - Support for multiple phone formats
  - Comprehensive test coverage for edge cases

- **Telefone Móvel Module** (`./telefone-movel`)
  - `formatTelefoneMovel()` - Format mobile phone numbers
  - `validateTelefoneMovel()` - Validate mobile phone format
  - Support for various Brazilian mobile formats
  - Comprehensive test coverage for edge cases

- **Export Organization**
  - Main entry point (`./`) exports all modules
  - Granular exports for each module (`./cpf`, `./cnpj`, `./cep`, `./telefone-fixo`, `./telefone-movel`)
  - Full TypeScript type definitions (.d.ts files)
  - Source maps for debugging

- **Development & Build Tools**
  - Jest test suite with comprehensive test coverage (37+ tests)
  - TypeScript strict mode configuration with complete type safety
  - ESLint with TypeScript plugin for code quality
  - Prettier code formatting configuration
  - GitHub Actions CI/CD pipeline for automated testing and publishing
  - ts-jest ESM preset for modern JavaScript module support

- **Documentation**
  - Bilingual README (Portuguese and English)
  - Complete API documentation for all modules
  - Usage examples for each module
  - Installation instructions
  - MIT License included

### Technical Details
- **Target**: ES2020
- **Module System**: ESNext (ESM)
- **Node Support**: >= 14.0.0
- **No External Dependencies**: Zero production dependencies for minimal footprint
- **Type Safety**: Full TypeScript strict mode enabled

[1.0.0]: https://github.com/dgstx/br-data-utils/releases/tag/1.0.0
