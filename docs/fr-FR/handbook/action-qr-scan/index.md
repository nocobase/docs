# Scanner le code QR

## Introduction

L'action de numérisation de code QR peut être ajoutée dans le bloc du panneau d'action pour faciliter la navigation dans le système.

## Exemple

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240612214013_rec_.mp4" type="video/mp4">
</video>

## Guide de l'utilisateur

### Générer un code QR

1. Supposons que le lien de la page vers lequel vous souhaitez rediriger soit : `https://localhost:13000/m/page/vyoiwa25jig`.
2. Extrait le lien relatif à partir de `/page/` dans l'URL de la page mobile, puis utilisez-le pour générer un code QR.
3. Créez un nouveau bloc Markdown et utilisez le code suivant :

```markdown
<qr-code value="/page/tr8r70ajpko" type="svg"></qr-code>
```

4. Ajoutez une action "Scanner le code QR" pour scanner et naviguer vers la page correspondante.

**Remarque** :
- L'action de numérisation de code QR ne prend en charge que les liens relatifs du système interne et doit commencer par `/page/`.
- Les liens vers des pages externes ne sont pas actuellement pris en charge.

Pour plus de détails, consultez la documentation du [Bloc du panneau d'action](/handbook/block-action-panel).
