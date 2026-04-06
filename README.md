# restaurant-saas-types

Tipos TypeScript partilhados para o sistema de reservas de restaurante.

Este pacote contém as **entities**, **enums** e **DTOs** usados tanto pelo backend como pelo frontend.

## Instalação

```bash
npm install restaurant-saas-types
```

Ou via GitHub (para repositórios privados):

```bash
npm install github:RodrigoPBernardo/restaurant-saas-types-
```

## Utilização

```typescript
import {
  Reservation,
  Restaurant,
  Table,
  ReservationStatus,
  ReservationSource,
  CreateReservationDTO,
  BaseEntity
} from 'restaurant-saas-types'
```

## Estrutura

```
src/
├── common/       # Tipos base reutilizáveis (BaseEntity)
├── dto/          # Data Transfer Objects (input/output da API)
├── entities/     # Entidades do domínio (Reservation, Restaurant, Table)
├── enums/        # Enumerações (ReservationStatus, ReservationSource)
└── index.ts      # Barrel export
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Build (CJS + ESM + declarations)
npm run build

# Watch mode
npm run dev
```
