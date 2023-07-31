export default function Validate(inputs) {
    const errors = {};
    const urlRegex = /(https?:\/\/.*\.(?:png|jpeg|jpg))/i; //Expresión regular para verificar una url solamente de imágenes
    const letraRegex = /^[A-Za-z\s]+$/; //Expresión regular para verificar que un texto no tenga números ni símbolos
    if (!letraRegex.test(inputs.name)) {
      errors.name = "El nombre no puede tener símbolos ni números";
    }
    if (inputs.name.trim().length === 0) {
      errors.name = "Campo obligatorio";
    }
    if (!urlRegex.test(inputs.image)) {
      errors.image = "URL no válida";
    }
    if (!inputs.height.trim().length >= 1) {
      errors.height = "Campo obligatorio";
    }
    if (!inputs.height.trim().length > 3) {
      errors.height = "Máximo excedido";
    }
    if (!inputs.weight.trim().length >= 1) {
      errors.height = "Campo obligatorio";
    }
    if (!inputs.weight.trim().length > 3) {
      errors.height = "Máximo excedido";
    }
    if (!inputs.life_span.trim().length >= 1) {
      errors.life_span = "Campo obligatorio";
    }
    if (inputs.temperaments.length === 0) {
      errors.temperaments = "Seleccione al menos un temperamento";
    }
    return errors;
  }
