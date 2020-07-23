package com.mlreef.rest

import java.time.ZonedDateTime
import java.util.UUID
import javax.persistence.DiscriminatorValue
import javax.persistence.Entity

@Entity
@DiscriminatorValue("VISUALIZATION")
class DataVisualization(
    id: UUID,
    slug: String,
    name: String,
    inputDataType: DataType,
    visibilityScope: VisibilityScope = VisibilityScope.default(),
    description: String = "",
    author: Subject? = null,
    codeProject: CodeProject? = null,
    termsAcceptedById: UUID? = null,
    termsAcceptedAt: ZonedDateTime? = null,
    licenceName: String? = null,
    licenceText: String? = null,
    lastPublishedAt: ZonedDateTime? = null,
    version: Long? = null,
    createdAt: ZonedDateTime? = null,
    updatedAt: ZonedDateTime? = null
) : DataProcessor(id, slug, name, inputDataType, DataType.NONE, DataProcessorType.VISUALIZATION,
    visibilityScope, description, codeProject, codeProject?.id, author,
    termsAcceptedById, termsAcceptedAt, licenceName, licenceText, lastPublishedAt,
    version, createdAt, updatedAt) {
    override fun isChainable(): Boolean = true

    fun copy(
        slug: String? = null,
        name: String? = null,
        inputDataType: DataType? = null,
        outputDataType: DataType? = null,
        visibilityScope: VisibilityScope? = null,
        description: String? = null,
        author: Subject? = null,
        codeProject: CodeProject? = null,
        codeProjectId: UUID? = codeProject?.id,
        termsAcceptedById: UUID? = null,
        termsAcceptedAt: ZonedDateTime? = null,
        licenceName: String? = null,
        licenceText: String? = null,
        lastPublishedAt: ZonedDateTime? = null
    ): DataVisualization = DataVisualization(
        slug = slug ?: this.slug,
        name = name ?: this.name,
        inputDataType = inputDataType ?: this.inputDataType,
        visibilityScope = visibilityScope ?: this.visibilityScope,
        description = description ?: this.description,
        author = author ?: this.author,
        id = id,
        codeProject = codeProject ?: this.codeProject,
        termsAcceptedById = termsAcceptedById ?: this.termsAcceptedById,
        termsAcceptedAt = termsAcceptedAt ?: this.termsAcceptedAt,
        licenceName = licenceName ?: this.licenceName,
        licenceText = licenceText ?: this.licenceText,
        lastPublishedAt = lastPublishedAt ?: this.lastPublishedAt,
        version = this.version,
        createdAt = this.createdAt,
        updatedAt = this.updatedAt
    )

}
