[![CI](https://github.com/nadiamoran/github-actions-UTN/actions/workflows/ci.yml/badge.svg)](https://github.com/nadiamoran/github-actions-UTN/actions/workflows/ci.yml)

# Trabajo Práctico Integrador - Grupo 6: Calidad de Código, Deuda Técnica y Seguridad (DevSecOps)

Este repositorio forma parte del Trabajo Práctico Integrador, enfocado en trascender la idea de que "el código funciona" hacia un estándar de ingeniería de software donde **el código es mantenible, seguro, escalable y cumple con estándares empresariales**.

---

## 📋 Tabla de Contenidos
1. [Objetivo del Proyecto](#-objetivo-del-proyecto)
2. [Marco Teórico y Conceptos Clave](#-marco-teórico-y-conceptos-clave)
   - Deuda Técnica y Code Smells
   - Testing Dinámico vs. Análisis Estático (SAST)
   - Riesgos en la Cadena de Suministro (Supply Chain Attacks) y Auditoría SCA
3. [Implementación Práctica (DevSecOps Pipeline)](#-implementación-práctica-devsecops-pipeline)
   - Integración con SonarCloud[cite: 1]
   - GitHub Actions Workflow[cite: 1]
   - Quality Gates[cite: 1]
   - Gestión de Dependencias con Dependabot[cite: 1]
4. [Integrantes del Grupo](#-integrantes-del-grupo)

---

## 🎯 Objetivo del Proyecto
Elevar la madurez técnica del equipo mediante la integración automatizada de **análisis estático de código (SAST)**, cuantificación y gestión de **deuda técnica**, escaneo de vulnerabilidades en dependencias (**SCA**) y la implementación de **Quality Gates (Puertas de Calidad)** en el pipeline de Integración Continua (CI)[cite: 1].

---

## 📚 Marco Teórico y Conceptos Clave

### 1. Deuda Técnica y Code Smells
La **Deuda Técnica** representa el costo implícito y acumulado de elegir una solución rápida o provisional ("parche") en lugar de un diseño limpio y sostenible[cite: 1]. 
* **Capital de la Deuda:** Esfuerzo necesario para refactorizar el código deficiente[cite: 1].
* **Intereses de la Deuda:** Tiempo adicional perdido en cada nueva funcionalidad debido a la fragilidad del sistema[cite: 1].
* **Code Smells (Hedores del Código):** Indicios superficiales que revelan problemas profundos en la estructura (ej. *Bloaters*, *Change Preventers*, *Couplers* y *Dispensables*) que degradan la mantenibilidad a largo plazo[cite: 1].

### 2. Testing Dinámico vs. Análisis Estático (SAST)
Para garantizar la calidad de forma integral, combinamos dos enfoques complementarios[cite: 1]:
* **Testing Dinámico (ej. Playwright):** Evalúa el comportamiento ejecutando la aplicación en un entorno controlado para validar flujos funcionales, interfaces y respuestas en tiempo de ejecución[cite: 1].
* **Análisis Estático / SAST (ej. SonarCloud):** Examina el código fuente sin ejecutarlo. Aplica el principio de *Shift-Left Security* encontrando vulnerabilidades (OWASP Top 10), violaciones de estándares y Code Smells desde las fases más tempranas del desarrollo[cite: 1].

### 3. Riesgos en la Cadena de Suministro (Supply Chain Attacks) y Auditoría SCA
Entre el 70% y el 90% del software moderno proviene de librerías de terceros (código abierto) gestionadas mediante manifiestos como `requirements.txt` o `package.json`[cite: 1]. Un **Supply Chain Attack** ocurre cuando un actor malicioso compromete una librería confiable (mediante *Typosquatting*, *Account Takeover* o *Dependency Confusion*) infectando indirectamente a todas las aplicaciones que la consumen[cite: 1]. 
* **Análisis SCA (Software Composition Analysis):** Disciplina para auditar las dependencias y contrastarlas con bases de datos de vulnerabilidades conocidas (CVEs)[cite: 1].

---

## ⚙️ Implementación Práctica (DevSecOps Pipeline)

El flujo de trabajo actual extiende el pipeline de CI/CD desarrollado en la Actividad 6 incorporando etapas de calidad y seguridad automatizadas:

### 1. Análisis Estático con SonarCloud
El repositorio se encuentra vinculado a **SonarCloud** para realizar inspecciones automáticas de calidad en cada aportación de código[cite: 1]. El escáner se ejecuta de manera secuencial inmediatamente después de haber superado los tests dinámicos[cite: 1].

### 2. Pipeline en GitHub Actions (`.github/workflows/ci.yml`)
El workflow incluye el *step* correspondiente para la ejecución del SonarScanner[cite: 1]:
```yaml
name: CI Pipeline - DevSecOps

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      # (Configuración de entorno, dependencias y ejecución de tests dinámicos previos)
      - name: Run Tests
        run: |
          # Comando para ejecutar los tests unitarios / funcionales
          echo "Ejecutando tests..."

      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
 yaml```

3. Quality Gate (Puertas de Calidad)
Se configuró un Quality Gate estricto en SonarCloud que bloquea e invalida el pipeline automáticamente si se incumple alguna de las siguientes condiciones en el código nuevo[cite: 1]:

Bugs o Vulnerabilidades: Cero tolerancia a nuevos "Bugs" o "Vulnerabilidades" de seguridad[cite: 1].

Cobertura de Tests: La cobertura de pruebas sobre el código nuevo debe ser inferior al 80% (falla si no se alcanza o supera este umbral)[cite: 1].

4. Automatización con GitHub Dependabot
Se activó GitHub Dependabot en el repositorio para auditar de forma continua los archivos de manifiesto de dependencias. Dependabot escanea el proyecto en segundo plano y genera Pull Requests automáticos en caso de detectar vulnerabilidades conocidas en las librerías de terceros utilizadas[cite: 1].
