"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteCreator2 = exports.ConcreteCreator1 = exports.Creator = void 0;
/* La Clase abstacta (podemos extender pero no instanciar) es la Factory Class*/
class Creator {
    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    someOperation() {
        // Call the factory method to create a Product object.
        const product = this.factoryMethod();
        // Now, use the product.
        return `Creator: El mismo código de creador funcionó con ${product.operation()}`;
    }
}
exports.Creator = Creator;
/**
 * Los Creadores Concretos sobreescriben el factory method para cambiar
 * el tipo de producto resultante.
 */
class ConcreteCreator1 extends Creator {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    factoryMethod() {
        return new ConcreteProduct1();
    }
}
exports.ConcreteCreator1 = ConcreteCreator1;
class ConcreteCreator2 extends Creator {
    factoryMethod() {
        return new ConcreteProduct2();
    }
}
exports.ConcreteCreator2 = ConcreteCreator2;
/**
 * Los Productos Concretos pueden tener distintas implementaciones de Product interface.
 */
class ConcreteProduct1 {
    operation() {
        return '{Result of the ConcreteProduct1}';
    }
}
class ConcreteProduct2 {
    operation() {
        return '{Result of the ConcreteProduct2}';
    }
}
//# sourceMappingURL=FactoryMethod.js.map