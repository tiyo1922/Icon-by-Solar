"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Icon: () => Icon,
  IconBySolar: () => IconBySolar,
  SolarIcon: () => SolarIcon,
  aliasRegistry: () => aliasRegistry,
  iconRegistry: () => iconRegistry,
  registerIcons: () => registerIcons,
  renderIconNodes: () => renderIconNodes,
  resolveIcon: () => resolveIcon
});
module.exports = __toCommonJS(index_exports);

// src/components/SolarIcon.tsx
var import_react = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var iconRegistry = {};
var aliasRegistry = {};
function registerSingleIcon(key, val) {
  if (!val) return;
  const nodes = val.nodes || (typeof val === "object" && !val.$$typeof ? val : null);
  const lowerKey = key ? key.toLowerCase().trim() : "";
  const slugKey = lowerKey.replace(/\s+/g, "-");
  if (nodes) {
    if (lowerKey) {
      iconRegistry[lowerKey] = nodes;
      iconRegistry[slugKey] = nodes;
    }
    if (val.iconName) {
      const canonical = String(val.iconName).toLowerCase().trim();
      iconRegistry[canonical] = nodes;
      iconRegistry[canonical.replace(/\s+/g, "-")] = nodes;
      if (lowerKey && lowerKey !== canonical) {
        aliasRegistry[lowerKey] = canonical;
        aliasRegistry[slugKey] = canonical;
      }
    }
  }
}
function registerIcons(...args) {
  for (const arg of args) {
    if (!arg) continue;
    if (Array.isArray(arg)) {
      for (const item of arg) {
        if (item?.iconName) {
          registerSingleIcon(item.iconName, item);
        }
      }
    } else if (arg.iconName && (arg.nodes || typeof arg === "function")) {
      registerSingleIcon(arg.iconName, arg);
    } else if (typeof arg === "object") {
      for (const [key, val] of Object.entries(arg)) {
        registerSingleIcon(key, val);
      }
    }
  }
}
function resolveIcon(name, variant = "outline", category) {
  const normVariant = variant === "bold_duotone" ? "bold-duotone" : variant.toLowerCase();
  const lowerName = name.toLowerCase().trim();
  if (iconRegistry[lowerName] && iconRegistry[lowerName][normVariant]) {
    return iconRegistry[lowerName][normVariant];
  }
  const slug = lowerName.replace(/\s+/g, "-");
  if (iconRegistry[slug] && iconRegistry[slug][normVariant]) {
    return iconRegistry[slug][normVariant];
  }
  const canonical = aliasRegistry[lowerName] || aliasRegistry[slug];
  if (canonical && iconRegistry[canonical] && iconRegistry[canonical][normVariant]) {
    return iconRegistry[canonical][normVariant];
  }
  if (category) {
    const scopedKey = `${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/${slug}`;
    const scopedCanonical = aliasRegistry[scopedKey];
    if (scopedCanonical && iconRegistry[scopedCanonical] && iconRegistry[scopedCanonical][normVariant]) {
      return iconRegistry[scopedCanonical][normVariant];
    }
  }
  return null;
}
function renderIconNodes(nodes, variant, color = "currentColor", secondaryColor, secondaryOpacity) {
  const isOriginalColor = color === "original" || color === "source";
  return nodes.map(([tag, attrs], index) => {
    const computedAttrs = { ...attrs };
    if (!isOriginalColor) {
      const hasOpacity = "opacity" in attrs;
      if (hasOpacity) {
        computedAttrs.opacity = secondaryOpacity ?? attrs.opacity;
        if (secondaryColor) {
          computedAttrs.fill = secondaryColor;
        } else if (color) {
          computedAttrs.fill = color;
        }
      } else if (attrs.fill && attrs.fill !== "none" && attrs.fill !== "transparent") {
        const isWhiteCutout = attrs.fill === "white" || attrs.fill === "#FEFEFF" || attrs.fill === "#FBFCFF";
        if (variant === "bold" && isWhiteCutout && nodes.length > 1) {
          computedAttrs.fill = attrs.fill;
        } else {
          computedAttrs.fill = color;
        }
      }
      if (attrs.stroke && attrs.stroke !== "none") {
        computedAttrs.stroke = color;
      }
    }
    return import_react.default.createElement(tag, {
      key: index,
      ...computedAttrs
    });
  });
}
var SolarIcon = (0, import_react.forwardRef)(function SolarIcon2({
  name,
  icon,
  variant = "outline",
  size = 24,
  color = "currentColor",
  secondaryColor,
  secondaryOpacity,
  category,
  title,
  fallback = null,
  className,
  style,
  ...restProps
}, ref) {
  if (icon) {
    if (typeof icon === "function" || typeof icon === "object" && icon.$$typeof) {
      return import_react.default.createElement(icon, {
        ref,
        variant,
        size,
        color,
        secondaryColor,
        secondaryOpacity,
        title,
        className,
        style,
        ...restProps
      });
    }
    if (icon.nodes) {
      const normVariant = variant === "bold_duotone" ? "bold-duotone" : variant.toLowerCase();
      const variantNodes = icon.nodes[normVariant];
      if (variantNodes) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "svg",
          {
            ref,
            viewBox: "0 0 24 24",
            width: size,
            height: size,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className,
            style: { display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style },
            "aria-hidden": title ? void 0 : "true",
            role: title ? "img" : "presentation",
            ...restProps,
            children: [
              title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }),
              renderIconNodes(variantNodes, variant, color, secondaryColor, secondaryOpacity)
            ]
          }
        );
      }
    }
  }
  let nodes = null;
  if (name) {
    nodes = resolveIcon(name, variant, category);
  }
  if (!nodes) {
    if (typeof process !== "undefined" && process.env?.NODE_ENV !== "production") {
      console.warn(
        `[Icon by Solar] Icon "${name}" with variant "${variant}" is not registered. Register it with registerIcons({ '${name}': SolarIconComponent }) or import from '@icon-by-solar/react/all' to load all icons.`
      );
    }
    return fallback ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback }) : null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      ref,
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-block",
        verticalAlign: "middle",
        flexShrink: 0,
        ...style
      },
      "aria-hidden": title ? void 0 : "true",
      role: title ? "img" : "presentation",
      ...restProps,
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }),
        renderIconNodes(nodes, variant, color, secondaryColor, secondaryOpacity)
      ]
    }
  );
});
SolarIcon.displayName = "SolarIcon";
var IconBySolar = SolarIcon;
var Icon = SolarIcon;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Icon,
  IconBySolar,
  SolarIcon,
  aliasRegistry,
  iconRegistry,
  registerIcons,
  renderIconNodes,
  resolveIcon
});
//# sourceMappingURL=index.cjs.map