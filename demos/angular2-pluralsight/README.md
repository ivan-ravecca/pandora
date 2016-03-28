angular.io/docs
==== Servicess ====
	Now all is a class (using Injectable)
==== Dependency injection ====
	We use provider: [ProviderName] in the decorator component
	Note: we need to add the dependency in the highest component, then children will be able to consume that dependency.
	If we add the same dependency on each component of a hierarchy structure, we'll get as many instances as declarations are.
