import React from 'react';
/**
 * A function that takes a component as its first argument and returns a new component that wraps
 * the given component, providing extra capabilities to it.
 */
export function withFavoriteNumber(component) {
  const C = component;
  return function(props) {
    return <C favoriteNumber={42} {...props} />;
  };
}
