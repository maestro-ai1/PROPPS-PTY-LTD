# Auth.md

## Site: PROPPS PTY LTD — Australian Cinema Prop Currency

## Agent Registration
No authentication required. All resources are publicly accessible.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | https://proppsptyltd.com.au/shop/ |
| Production Guides | https://proppsptyltd.com.au/blog/ |
| FAQ | https://proppsptyltd.com.au/faq/ |
| Wholesale Studio Supply | https://proppsptyltd.com.au/wholesale/ |
| Compliance Guidelines | https://proppsptyltd.com.au/compliance/ |
| Contact | https://proppsptyltd.com.au/contact/ |
| Products API | https://proppsptyltd.com.au/api/products |
| Categories API | https://proppsptyltd.com.au/api/categories |
| Search API | https://proppsptyltd.com.au/api/search |
| MCP Server | https://proppsptyltd.com.au/api/mcp |

## OAuth Protected Resource Metadata

This site has no protected resources requiring OAuth. Metadata is published per
RFC 9728 at [/.well-known/oauth-protected-resource](https://proppsptyltd.com.au/.well-known/oauth-protected-resource)
and the authorization server metadata (with an `agent_auth` block) is at
[/.well-known/oauth-authorization-server](https://proppsptyltd.com.au/.well-known/oauth-authorization-server).

## Authentication

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All catalog resources are public."
  }
}
```

## Ordering
Human-in-the-loop required. Agents may browse and prepare order drafts.
Orders are completed by an adult human via WhatsApp or the checkout order form. Minimum order $300 AUD.
